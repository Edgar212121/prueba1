import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton, useTonWallet, useTonConnectUI } from "@tonconnect/ui-react";

function App() {
  const [wallet, setWallet] = useState<ReturnType<typeof useTonWallet> | null>(null);
  const [tonConnectUI, setTonConnectUI] = useState<ReturnType<typeof useTonConnectUI> | null>(null);

  useEffect(() => {
    setWallet(useTonWallet());
    setTonConnectUI(useTonConnectUI());
  }, []);

  const handleBuy = async () => {
    if (!wallet) {
      alert("Por favor, conecta tu wallet de Telegram primero.");
      return;
    }

    try {
      WebApp.showPopup({ title: "Conectando...", message: "Espera un momento..." });

      // Crear una transacción
      const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
        messages: [
          {
            address: "AQUI_VA_TU_DIRECCION_TON", // Dirección TON donde recibirás el pago
            amount: "1500000000", // 1.5 TON (en nanoton)
            payload: "", // Puedes incluir un mensaje o metadatos
          }
        ]
      };

      // Enviar el pago
      if (tonConnectUI) {
        await tonConnectUI[0].sendTransaction(transaction);
      } else {
        alert("❌ Error: tonConnectUI no está disponible.");
      }

      alert("✅ Pago realizado con éxito.");
    } catch (error) {
      console.error("Error en el pago:", error);
      alert("❌ Error en el pago.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Producto Destacado</h1>
      <img src="https://via.placeholder.com/200" alt="Producto" style={{ borderRadius: "10px" }} />
      <h2>Nombre del Producto</h2>
      <p>Precio: 1.5 TON</p>

      {/* Botón para conectar la wallet de Telegram */}
      <TonConnectButton />

      {/* Botón de compra */}
      <button onClick={handleBuy} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Comprar con TON
      </button>
    </div>
  );
}

export default App;
