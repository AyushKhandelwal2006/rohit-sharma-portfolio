"use client";
import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    document.querySelectorAll("[data-target]").forEach(el => {
      let count = 0;
      const target = +el.dataset.target;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        el.innerText = count;
        if (count >= target) {
          el.innerText = target;
          clearInterval(interval);
        }
      }, 20);
    });
  }, []);

  return (
    <section id="stats" className="p-20">
      <h2 className="text-4xl font-black mb-8">Career Stats</h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="brutal bg-yellow-400 p-8 text-center">
          <p className="text-4xl font-black" data-target="10000">0</p>
          <p className="font-bold">Runs</p>
        </div>

        <div className="brutal bg-orange-400 p-8 text-center">
          <p className="text-4xl font-black" data-target="49">0</p>
          <p className="font-bold">Centuries</p>
        </div>

        <div className="brutal bg-purple-400 p-8 text-center">
          <p className="text-4xl font-black" data-target="264">0</p>
          <p className="font-bold">Highest Score</p>
        </div>
      </div>
    </section>
  );
}
