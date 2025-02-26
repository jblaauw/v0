interface NoteOptionProps {
  name: string
  percentage: number
  onPercentageChange: (value: number) => void
}

export function NoteOption({ name, percentage, onPercentageChange }: NoteOptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{percentage}%</div>
    </div>
  )
}

