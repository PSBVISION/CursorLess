export function Header() {
  return (
    <box alignItems="center" justifyContent="center">
      <box flexDirection="row" justifyContent="center" alignItems="center" gap={0.5}>
        <ascii-font font="tiny" text="Cursor-" color="orange"/>
        <ascii-font font="tiny" text="Less" />
      </box>
    </box>
  )
}