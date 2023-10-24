import "./ModalExcluir.scss"

function ModalExcluir(props) {

    const submit = () => {
        fetch(`http://localhost:5000/produtos/${props.selected.id}`, {
            method: "DELETE"
        })
            .then(() => {
                props.setClose(false);
                props.refresh();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="modal">
            <div className="modal-body">
                <h1>Deseja deletar o produto {props.selected.nome}</h1>
                <div>
                    <div>
                        <button onClick={submit}>Excluir</button>
                    </div>
                    <div>
                        <button onClick={() => props.setClose(false)} >Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalExcluir;