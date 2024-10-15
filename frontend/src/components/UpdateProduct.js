useEffect(() => {
    const getProduct = async () => {
        try {
            const res = await fetch(`https://design-backend-nq2x.vercel.app/products/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();

            if (res.status === 201) {
                console.log("Data Retrieved.");
                setProductName(data.ProductName);
                setProductPrice(data.ProductPrice);
                setProductBarcode(data.ProductBarcode);
            } else {
                console.log("Something went wrong. Please try again.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    getProduct();
}, [id]);

const updateProduct = async (e) => {
    e.preventDefault();

    if (!productName || !productPrice || !productBarcode) {
        setError("*Please fill in all the required fields.");
        return;
    }

    setLoading(true);
    setError("");

    try {
        const response = await fetch(`https://design-backend-nq2x.vercel.app/updateproduct/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "ProductName": productName, "ProductPrice": productPrice, "ProductBarcode": productBarcode })
        });

        await response.json();

        if (response.status === 201) {
            alert("Data Updated");
            navigate('/products');
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
