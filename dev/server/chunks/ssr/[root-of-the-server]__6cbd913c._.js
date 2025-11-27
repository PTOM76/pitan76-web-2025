module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/yet-another-react-lightbox [external] (yet-another-react-lightbox, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("yet-another-react-lightbox");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/hooks/useLightbox.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLightbox",
    ()=>useLightbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const useLightbox = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        open: false,
        slides: [],
        index: 0
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const images = Array.from(document.querySelectorAll('img:not([data-lightbox="false"])'));
        const slides = images.map((img)=>({
                src: img.currentSrc || img.src
            }));
        setLightbox((prev)=>({
                ...prev,
                slides
            }));
        const cleanups = images.map((img, i)=>{
            const onClick = (e)=>{
                e.preventDefault();
                setLightbox({
                    open: true,
                    slides,
                    index: i
                });
            };
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', onClick);
            return ()=>{
                img.removeEventListener('click', onClick);
                img.style.removeProperty('cursor');
            };
        });
        return ()=>cleanups.forEach((dispose)=>dispose());
    }, [
        router.asPath
    ]);
    return {
        lightbox,
        setLightbox
    };
};
}),
"[project]/hooks/useLoadingScreen.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoadingScreen",
    ()=>useLoadingScreen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const useLoadingScreen = ()=>{
    // ロード画面
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [fadeOut, setFadeOut] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const MIN_TIME = undefined;
        const start = undefined;
        const hideLoader = undefined;
        const navEntries = undefined;
        const isCached = undefined;
    }, []);
    return {
        loading,
        fadeOut
    };
};
}),
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/_app.tsx
__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/yet-another-react-lightbox [external] (yet-another-react-lightbox, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLightbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLightbox.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLoadingScreen$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLoadingScreen.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    const { lightbox, setLightbox } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLightbox$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLightbox"])();
    const { loading, fadeOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLoadingScreen$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useLoadingScreen"])();
    let title = "Pitan76.NET";
    if (pageProps?.title) {
        title = `${pageProps.title} | ${title}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Pitan76's website"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: `loading${fadeOut ? ' fade-out' : ''}`
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 27,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$yet$2d$another$2d$react$2d$lightbox__$5b$external$5d$__$28$yet$2d$another$2d$react$2d$lightbox$2c$__esm_import$29$__["default"], {
                open: lightbox.open,
                close: ()=>setLightbox({
                        ...lightbox,
                        open: false
                    }),
                slides: lightbox.slides,
                index: lightbox.index
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/terms/",
                        children: "Terms of Service & Privacy Policy"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 35,
                        columnNumber: 5
                    }, this),
                    " | ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/changelog/",
                        children: "Change Log"
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 35,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, this),
                    "Copyright © 2020-2025 Pitan | E-mail admin@pitan76.net"
                ]
            }, void 0, true, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6cbd913c._.js.map