

export const Alerta = ({alerta}) => {
  return (
    <div className={`bg-gradient-to-br ${alerta.error ? 'from-red-400 to-red-600' : 'from-sky-400 to-sky-600'} text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10`}>
    {alerta.msg}
    </div>
  ) 
}
