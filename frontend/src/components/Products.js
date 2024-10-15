const getProducts = async (e) => {
    try {
        const res = await fetch("https://design-backend-nq2x.vercel.app/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 201) {
            console.log("Data Retrieved.");
            setProductData(data);
        }
        else {
            console.log("Something went wrong. Please try again.");
        }
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (id) => {
    const response = await fetch(`https://design-backend-nq2x.vercel.app/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const deletedata = await response.json();
    console.log(deletedata);

    if (response.status === 422 || !deletedata) {
        console.log("Error");
    } else {
        console.log("Product deleted");
        getProducts();
    }
};
