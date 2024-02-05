import { useMousePressed, useIntervalFn, useTimeout } from "@vueuse/core";
import { Ref, watch } from "vue";

export interface UseHoldOptions {
  target: Ref<HTMLElement | null>;
  fn: () => void;
}

export function useHoldEvent(options: UseHoldOptions) {
  const { pressed } = useMousePressed({ target: options.target });
  const { ready, start, stop } = useTimeout(300, { controls: true })
  const { pause, resume } = useIntervalFn(() => {
   if (ready.value) { 
    options.fn()
   }
  }, 50, {
    immediate: false,
  });
  watch(pressed, newVal => {
    if (newVal) {
        start()
        resume();
    }
    else { 
        stop()
        pause();
    }
  });
}
