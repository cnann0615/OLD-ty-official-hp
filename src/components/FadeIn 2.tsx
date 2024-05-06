import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export const TimeFadeIn = ({ children, delay }: { children: React.ReactNode, delay?: number }) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // コンポーネントがマウントされた後、delayミリ秒後に inView を true に設定
        const timer = setTimeout(() => {
            setInView(true);
        }, delay);

        console.log(delay);

        // コンポーネントがアンマウントされた時にタイマーをクリア
        return () => clearTimeout(timer);
    }, [delay]);  // delay を依存配列に加える

    return (
        <div
            className={`${inView ? "opacity-100" : "opacity-0 translate-x-[-50%]"} transition-opacity duration-[1s]`}
        >
            {children}
        </div>
    );
}

export const FadeIn = ({ children }: any) => {
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-5px', // ref要素が現れてから5px過ぎたら
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
        rootMargin: '-100px', // ref要素が現れてから50px過ぎたら
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
        rootMargin: '-100px', // ref要素が現れてから50px過ぎたら
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