'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { hero } from '@/data/tresc';

export default function BloomSculpture() {
  const hostRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<() => void>(() => {});
  const [available, setAvailable] = useState(true);
  const [spins, setSpins] = useState(0);

  useEffect(() => {
    const host = hostRef.current!;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let motionReduced = reducedMotion.matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      setAvailable(false);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.92;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 50);
    camera.position.set(0, 0.03, 8.2);
    const environment = new RoomEnvironment();
    const generator = new THREE.PMREMGenerator(renderer);
    const envTarget = generator.fromScene(environment, 0.04);
    scene.environment = envTarget.texture;
    environment.dispose();
    generator.dispose();
    const key = new THREE.DirectionalLight(0xffefd8, 2.2);
    key.position.set(-3, 5, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xffc6b0, 1.3);
    rim.position.set(4, 2, -2);
    scene.add(rim);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    // A continuously inflated six-lobed surface, not a video or eye-following effect.
    const geometry = new THREE.SphereGeometry(1, 128, 96);
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i), y = position.getY(i), z = position.getZ(i);
      const angle = Math.atan2(y, x);
      const radial = Math.hypot(x, y);
      const swell = 1 + 0.31 * Math.cos(6 * angle) * Math.pow(radial, 2.1);
      position.setXYZ(i, x * swell, y * swell, z * 0.53);
    }
    geometry.computeVertexNormals();
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xf36c2e, roughness: 0.36, metalness: 0.08, envMapIntensity: 0.65,
      clearcoat: 0.45, clearcoatRoughness: 0.36, sheen: 0.25,
      sheenColor: new THREE.Color(0xffc7a0), sheenRoughness: 0.6,
    });
    const sculpture = new THREE.Group();
    const flower = new THREE.Mesh(geometry, material);
    flower.scale.setScalar(1.31);
    sculpture.add(flower);
    sculpture.rotation.set(-0.18, -0.33, 0.15);
    scene.add(sculpture);

    const orbGeometry = new THREE.SphereGeometry(1, 40, 32);
    const pearlMaterial = new THREE.MeshPhysicalMaterial({color:0xffe7ba,roughness:0.19,metalness:0.24,clearcoat:1});
    const inkMaterial = new THREE.MeshPhysicalMaterial({color:0x762f31,roughness:0.24,metalness:0.13,clearcoat:0.6});
    const pearl = new THREE.Mesh(orbGeometry, pearlMaterial);
    pearl.scale.setScalar(0.21);
    scene.add(pearl);
    const ink = new THREE.Mesh(orbGeometry, inkMaterial);
    ink.scale.setScalar(0.13);
    scene.add(ink);

    let frame = 0;
    let elapsed = 0;
    let previous = 0;
    let drag = false;
    let lastX = 0;
    let lastY = 0;
    let movement = 0;
    let rotation = 0.15;
    let targetTilt = -0.33;
    let tilt = -0.33;
    let velocity = 0;
    let bounce = 0;
    let visible = true;
    let disposed = false;
    const resize = () => {
      const rect = host.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      camera.aspect = rect.width / rect.height;
      camera.position.z = camera.aspect < 1 ? 9.5 : 8.2;
      camera.updateProjectionMatrix();
      renderStill();
    };
    const draw = (time: number) => {
      pearl.position.set(Math.cos(time * 0.45 + 0.7) * 1.94, Math.sin(time * 0.45 + 0.7) * 1.55, Math.sin(time * 0.45 + 0.7) * 0.85);
      ink.position.set(Math.cos(time * 0.36 + 3.6) * 2.0, Math.sin(time * 0.36 + 3.6) * 1.66, Math.cos(time * 0.36 + 3.6) * 0.55);
      sculpture.rotation.set(-0.18 + Math.sin(time * 0.45) * 0.08, tilt, rotation);
      sculpture.position.y = Math.sin(time * 0.9) * 0.11;
      const pulse = 1 + Math.sin(bounce) * Math.min(bounce * 0.018, 0.07);
      sculpture.scale.setScalar(pulse);
      renderer.render(scene, camera);
    };
    function renderStill() { draw(elapsed); }
    const tick = (now: number) => {
      frame = 0;
      if (disposed || !visible || motionReduced) return;
      const dt = Math.min((now - (previous || now)) / 1000, 0.045);
      previous = now;
      elapsed += dt;
      if (!drag) {
        rotation += 0.065 * dt + velocity * dt;
        velocity *= Math.exp(-dt * 2.1);
        targetTilt = -0.33 + Math.sin(elapsed * 0.4) * 0.22;
      }
      tilt += (targetTilt - tilt) * Math.min(1, dt * 6);
      bounce = Math.max(0, bounce - dt * 7);
      draw(elapsed);
      host.dataset.rotation = rotation.toFixed(3);
      frame = requestAnimationFrame(tick);
    };
    const syncPlayback = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      host.dataset.motion = motionReduced ? 'reduced' : 'animated';
      if (motionReduced || !visible) renderStill();
      else frame = requestAnimationFrame(tick);
    };
    const onMotionChange = (event: MediaQueryListEvent) => {
      motionReduced = event.matches;
      syncPlayback();
    };
    const spin = () => {
      if (motionReduced) {
        rotation += Math.PI / 3;
        renderStill();
        host.dataset.rotation = rotation.toFixed(3);
      } else {
        velocity = 6.2;
        bounce = 8;
      }
      setSpins(value => value + 1);
    };
    spinRef.current = spin;
    const down = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      drag = true;
      movement = 0;
      lastX = event.clientX;
      lastY = event.clientY;
      host.setPointerCapture(event.pointerId);
      host.classList.add('is-dragging');
    };
    const move = (event: PointerEvent) => {
      if (!drag) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      movement += Math.abs(dx) + Math.abs(dy);
      rotation -= dy * 0.008;
      targetTilt += dx * 0.009;
      tilt = targetTilt;
      velocity = dx * 0.015;
      lastX = event.clientX;
      lastY = event.clientY;
      renderStill();
    };
    const up = () => {
      if (!drag) return;
      drag = false;
      host.classList.remove('is-dragging');
      if (movement < 6) spin();
    };
    const onVisibility = () => {
      visible = !document.hidden;
      syncPlayback();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    host.addEventListener('pointerdown', down);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerup', up);
    host.addEventListener('pointercancel', up);
    reducedMotion.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibility);
    syncPlayback();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener('pointerdown', down);
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerup', up);
      host.removeEventListener('pointercancel', up);
      reducedMotion.removeEventListener('change', onMotionChange);
      document.removeEventListener('visibilitychange', onVisibility);
      geometry.dispose();
      orbGeometry.dispose();
      material.dispose();
      pearlMaterial.dispose();
      inkMaterial.dispose();
      envTarget.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      spinRef.current = () => {};
    };
  }, []);

  return (
    <div className="sculpture-wrap">
      <span className="art-caption">{hero.podpisRzezby}</span>
      <div className="sculpture-shadow" aria-hidden="true" />
      <div ref={hostRef} className="sculpture-canvas" role="img" aria-label="A floating, inflated orange flower sculpture with two orbiting pearls">
        {!available && <div className="fallback-flower" aria-hidden="true">✳</div>}
      </div>
      <div className="play-controls">
        {available && <button className="spin-button" onClick={() => spinRef.current()} aria-label="Spin the flower sculpture">
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16.5 7a7 7 0 1 0 .5 5M16.5 2.5V7H12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {hero.przycisk}
        </button>}
        <span className="drag-hint">{hero.wskazowka}</span>
      </div>
      <span className="sr-only" aria-live="polite">{spins > 0 ? `Flower spun ${spins} ${spins === 1 ? 'time' : 'times'}.` : ''}</span>
    </div>
  );
}
