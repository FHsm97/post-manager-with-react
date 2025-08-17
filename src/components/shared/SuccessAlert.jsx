

export default function SuccessAlert({message,closeHandler}) {

    return (
        <div className="flex items-center justify-between p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg shadow-sm" role="alert">
            <div className="flex items-center">
                {/* آیکون تیک */}
                <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414l3.222 3.222 6.657-6.657a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <span>{message}</span>
            </div>

            {/* دکمه بستن */}
            <button
                type="button"
                onClick={closeHandler}
                className="ml-4 text-green-700 hover:text-green-900 focus:outline-none"
                aria-label="Close"
            >
                ✕
            </button>
        </div>
    );

}