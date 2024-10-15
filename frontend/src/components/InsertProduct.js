const addProduct = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productBarcode) {
        setError("*Please fill in all the required fields.");
        return;
    }

    setLoading(true);
    setError("");

    try {
        const res = await fetch("https://design-backend-nq2x.vercel.app/insertproduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "ProductName": productName, "ProductPrice": productPrice, "ProductBarcode": productBarcode })
        });

        await res.json();

        if (res.status === 201) {
            alert("Data Inserted");
            setProductName("");
            setProductPrice(0);
            setProductBarcode(0);
            navigate('/products');
        }
        else if (res.status === 422) {
            alert("Product is already added with that barcode.");
        }
        else {
            setError("Something went wrong. Please try again.");
        }
    } catch (err) {
        setError("An error occurred. Please try again later.");
        console.log(err);
    } finally {
        setLoading(false);
    }
};
