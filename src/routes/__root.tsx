import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white"><div className="max-w-md text-center"><h1 className="text-7xl font-bold">404</h1><p className="mt-3 text-zinc-400">Essa página não existe.</p><Link to="/" className="mt-6 inline-block rounded-lg bg-violet-600 px-4 py-2">Voltar ao LovaRpm</Link></div></div>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="flex min-h-screen items-center justify-center bg-black text-white"><button onClick={()=>{router.invalidate();reset()}}>Tentar novamente</button></div>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"LovaRpm — Menos prompts. Mais velocidade."},{name:"description",content:"Acelere seu fluxo no Lovable com Quick Fix, Skills personalizadas, Commands e correções rápidas."},{property:"og:title",content:"LovaRpm — Menos prompts. Mais velocidade."},{property:"og:description",content:"Ferramentas rápidas para construir e corrigir projetos no Lovable com menos atrito."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
