

const Cart = ({ d }) => {
    console.log(d);
    return (
        <div className="card card-compact w-96  shadow-xl" style={{ backgroundColor: d?.category_bg }}>
            <img className="h-[200px]" src={d?.picture} />
            <div className="card-body">
                <p className={`p-2 max-w-max `} style={{ backgroundColor: d?.category_bg ,color:d?.text_and_button_bg}}>{d?.category}</p>
                <h2 className="card-title" style={{color:d?.text_and_button_bg}}>{d?.title}</h2>

            </div>
        </div>
    );
};

export default Cart;