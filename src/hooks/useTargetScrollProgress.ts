// Similar to how useScroll works. Required to manually calculate scrollYProgress
// when not possible in useLayoutEffect after a page reload.
function useTargetScrollProgress(targetRef: HTMLElement | null): number {
	if (!targetRef) return 0;

	const targetRect = targetRef.getBoundingClientRect();
	const targetHeight = targetRect.height;
	const viewportHeight = window.innerHeight;
	const progress = (targetRect.top - viewportHeight) / (-targetHeight - viewportHeight);

	return Math.min(1, Math.max(0, progress));
}

export default useTargetScrollProgress;