export default function ConfirmModal() {
  return (
    // L'élément dialog permet l'utilisation d'une propriété open (boolean)
    <dialog className="modal" open={false}>
      <form method="dialog">
        <p>Voulez-vous valider ?</p>
        <button>Oui</button>
      </form>
    </dialog>
  )
}