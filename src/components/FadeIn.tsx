import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const TimeFadeIn = ({ children }: any) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // コンポーネントがマウントされた後、3秒後に isVisibleをtrue に設定
        const timer = setTimeout(() => {
            setInView(true);
        }, 500); // 500ミリ秒 = 0.5秒

        // コンポーネントがアンマウントされた時にタイマーをクリア
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`${inView ? "opacity-100" : "opacity-0 translate-x-[-50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}

export const FadeIn = ({ children }: any) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-300px', // ref要素が現れてから300px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}

export const SlideInRight = ({ children }: any) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-350px', // ref要素が現れてから350px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-x-[50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}


export const SlideInLeft = ({ children }: any) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-350px', // ref要素が現れてから350px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <div
            ref={ref}
            className={`${inView ? "opacity-100" : "opacity-0 translate-x-[-50%]"} duration-[1s]`}
        >
            {children}
        </div>
    )
}