import { useState } from "react";
import "./ModalAction.scss";

export default function ModalAction(props) {

    const [form, setForm] = useState({
        nome: "",
        descricao: "",
        preco: 0
    });

    const submit = () => {
        if (form.nome.length > 0 && form.descricao.length > 0 && form.preco > 0) {
            fetch("http://localhost:5000/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            .then(() => {
                props.setClose(false);
                props.refresh();
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            alert("Preencha todos os campos do formulário!")
        }
    }

    if (props.open) {
        return (
            <div className="modal">
                <div className="modal-body">
                    <h1>Adicionar produto</h1>
                    <input placeholder="Nome" value={form.nome} onChange={(value) => setForm({ ...form, nome: value.target.value })} />
                    <input placeholder="Descrição" value={form.descricao} onChange={(value) => setForm({ ...form, descricao: value.target.value })} />
                    <input placeholder="Preço" type="number" value={form.preco} onChange={(value) => setForm({ ...form, preco: value.target.value })} />
                    <div>
                        <div>
                            <button onClick={submit}>Add</button>
                        </div>
                        <div>
                            <button onClick={() => props.setClose(false)} >Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
