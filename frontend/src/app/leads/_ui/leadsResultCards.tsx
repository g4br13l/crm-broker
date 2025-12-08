import { ResultCard } from '../../../components/ui/resultCard'



export function LeadsResultCards() {

  return (

    <div className="gap-4 grid grid-cols-2 @5xl/main:grid-cols-4 @xl/main:grid-cols-2 dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs">

      <ResultCard
        subtitle="Novos leads na semana"
        title="1.250"
        description="Entraram no funil de vendas"
        growingAmount="+10.5%"
      />

      <ResultCard
        subtitle="Leads em recuperação na semana"
        title="250"
        description="Entraram na fila reversa"
        growingAmount="+8%"
      />

      <ResultCard
        subtitle="Leads ganhos na semana"
        title="400"
        description="Passaram de Lead para cliente"
        growingAmount="+15%"
      />

      <ResultCard
        subtitle="Leads perdidos na semana"
        title="800"
        description="Saíram do funil de vendas"
        growingAmount="-5.5%"
      />
        
    </div>

  )
}
