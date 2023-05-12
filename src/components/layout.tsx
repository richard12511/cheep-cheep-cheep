import type { PropsWithChildren } from "react";

export function PageLayout(props: PropsWithChildren) {
  return (
    <main className="flex h-screen justify-center bg-teal-400">
      <div className="flex h-full w-full max-w-2xl flex-col border-x border-slate-800 bg-orange-500">
        {props.children}
      </div>
    </main>
  );
}
