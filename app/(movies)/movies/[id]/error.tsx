"use client"

interface ErrorProps {
    error: Error & { digest?: string }; // 발생한 에러 객체
    reset: () => void;                  // 해당 컴포넌트를 다시 렌더링 시도하는 함수
}


export default function Error({ error, reset }: ErrorProps){
    return (
        <div>
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button onClick={reset}>다시 시도</button>
        </div>
    )
}