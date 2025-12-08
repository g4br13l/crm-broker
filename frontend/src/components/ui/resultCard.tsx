import { TrendingDown, TrendingUp } from 'lucide-react'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../base/card'
import { Badge } from '../base/badge'



type ResultCardPropsT = {
  subtitle?: string
  title?: string
  isGrowing?: boolean
  growingAmount?: string
  description?: string
  subDescription?: string
}



function GrowInfo({ isGrowing, amount }: { isGrowing: boolean, amount?: string }) {
  return (
    <div>
      {isGrowing ? (
        <div className="f-row gap-1">
          <TrendingUp size="14" />  {amount} 
        </div>
      ) : (
        <div className="f-row gap-1">
          <TrendingDown size="14" />  {amount}
        </div>
      )}
    </div>
  )
}


export function ResultCard({
  subtitle,
  title,
  isGrowing,
  growingAmount,
  description,
  subDescription,
}: ResultCardPropsT) {

  isGrowing = !!(isGrowing || (growingAmount && growingAmount[0] === '+'))

  return (

    <Card className="@container/card">
      
      <CardHeader>
        {growingAmount && (
          <CardAction>
            <Badge variant="outline">
              <GrowInfo isGrowing={isGrowing} amount={growingAmount} />
            </Badge>
          </CardAction>
        )}
        {subtitle && (
          <CardDescription>
            {subtitle}
          </CardDescription>
        )}
        {title && (
          <CardTitle className="font-semibold tabular-nums text-2xl @[250px]/card:text-3xl">
            {title}
          </CardTitle>
        )}
      </CardHeader>
      
      {(description || subDescription) && (
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          {description && (
            <div className="flex gap-2 line-clamp-1">
              {description}
            </div>
          )}
          {subDescription && (
            <div className="text-muted-foreground">
              {subDescription}
            </div>
          )}
        </CardFooter>
      )}

    </Card>

  )
}
