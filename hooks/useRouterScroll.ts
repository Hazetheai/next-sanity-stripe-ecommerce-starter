import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * React hook that forces a scroll reset to a particular set of coordinates in the document
 * after `next/router` finishes transitioning to a new page client side. It smoothly scrolls back to
 * the top by default.
 *
 * @see https://github.com/vercel/next.js/issues/3249
 * @see https://github.com/vercel/next.js/issues/15206
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
 */

interface UseRouterScroll {
    behavior: ScrollBehavior;
    top: number;
    left: number;
}

function useRouterScroll({ behavior, left, top }: UseRouterScroll) {
    const router = useRouter();
    useEffect(() => {
        // Scroll to given coordinates when router finishes navigating
        // This fixes an inconsistent behaviour between `<Link/>` and `next/router`
        // See https://github.com/vercel/next.js/issues/3249
        const handleRouteChangeComplete = () => {
            try {
                if (!/cart/.test(router.pathname)) {
                    window.scrollTo({ top, left, behavior });
                }
            } catch (err) {
                console.error('Error Scrolling', err);
            }
        };

        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        // If the component is unmounted, unsubscribe from the event
        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [behavior, left, top]);
}

export default useRouterScroll;
