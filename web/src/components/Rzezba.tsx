"use client";
import { lazy, Suspense } from "react";

const BloomSculpture = lazy(() => import("./BloomSculpture"));

export default function Rzezba() {
  return (
    <Suspense
      fallback={
        <div className="sculpture-wrap sculpture-placeholder">
          <div className="fallback-flower" aria-hidden="true">✳</div>
        </div>
      }
    >
      <BloomSculpture />
    </Suspense>
  );
}
