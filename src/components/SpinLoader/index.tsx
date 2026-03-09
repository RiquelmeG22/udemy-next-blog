
type PropsClass = {
  classProps?: string;
}

export function SpinLoader({ classProps }: PropsClass) {

  return <div className={`flex items-center justify-center ${classProps || ''}`}>
    <div className="w-10 h-10 border-5 border-t-transparent border-slate-900 rounded-full animate-spin"></div>
  </div>

}
