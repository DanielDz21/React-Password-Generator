import './style.css';

function CopyPasswordButton({ password }) {

  const CopyPasswordButton = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className='actions'>
      <button
      className='copy-password-to-clipboard'
      onClick={CopyPasswordButton}>
        Copiar para área de transferência
      </button>
    </div>
  );
}

export default CopyPasswordButton;
