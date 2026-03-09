type ContainerProsp = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProsp) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen">
      <div className="bg-amber-500 max-auto px-8">
        {children}
      </div>
    </div>

  )
}
