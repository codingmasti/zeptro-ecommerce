import { createContext, useContext, useState } from "react";


const AdderssContext = createContext()



const AddressProvider = ({ children }) => {

    const [location, setLocation] = useState()
    const [openDropDown, setOpenDropeDown] = useState(false)
    const [paymentMethod, setPaymentMethod]  = useState("")
    const [address, setAddress] = useState({
        fullName: "",
        mobile: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
      });


    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );

                    const data = await response.json();
                    //console.log("data",data)

                    setLocation(data.address);
                    setOpenDropeDown(false);

                    console.log(data.address);
                } catch (error) {
                    console.log("Location Error:", error);
                }
            },
            (error) => {
                console.log("Geolocation Error:", error);
            }
        );
    };






    const value = {
        location,
        getLocation,


        openDropDown,
        setOpenDropeDown,

        address,
        setAddress,

        paymentMethod,
        setPaymentMethod
    }
    return (
        <AdderssContext.Provider value={value}>
            {children}
        </AdderssContext.Provider>
    )
}

const useAddressContext = () => {
    return useContext(AdderssContext)
}


export { AddressProvider, useAddressContext }