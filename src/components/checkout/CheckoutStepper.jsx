import React, { useEffect, useRef, useState } from 'react'

import "./CheckoutStepper.css"
import OrderSuccessPopup from './Popup'
import { useAddressContext } from '../../context/AddressContext'

const CheckoutStepper = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1)
    const [isCompleate, setIsCompleate] = useState(false)
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    })
    const [showPopup, setShowPopup] = useState(false)
    const {address} = useAddressContext()
    const stepRef = useRef([])





    if (!stepsConfig.length) {
        return <></>
    }


    useEffect(() => {
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2
        })
        //console.log(stepRef.current[stepsConfig.length - 1].offsetWidth);
    }, [stepsConfig.length])

    const validateStep = (step) => {
        if (step === 1) {
            return (
                address.fullName &&
                address.mobile &&
                address.addressLine &&
                address.city &&
                address.state
            );
        }
        return true;
    }


    const handleNext = () => {

        if(validateStep && !validateStep(currentStep)){
            return;
        }
        if (currentStep === stepsConfig.length) {
            setIsCompleate(true);
            setShowPopup(true);
            return;
        }

        setCurrentStep((prev) => prev + 1);
    };





    const ActiveComponent = stepsConfig[currentStep - 1]?.Component

    const calculateProgressBar = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100
    }
    return (
        <>
            <div className='flex mx-2 justify-between bg-gray-50 border max-w-7xl rounded-md border-gray-300 mt-8'>
                <div className='relative w-full md:w-[50%] md:mt-5 p-2 flex lg:mx-auto items-center justify-between   '>

                    {stepsConfig.map((step, index) => {
                        return (
                            <div key={step.name}
                                ref={el => (stepRef.current[index] = el)}
                                className={`step ${currentStep > index + 1 || isCompleate ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`}
                            >


                                <div className='step-number'>
                                    {currentStep > index + 1 || isCompleate ? (<span>&#10003;</span>)
                                        :
                                        (index + 1)}
                                </div>
                                <div className='md:font-[14px] text-center'>
                                    {step.name}
                                </div>
                            </div>
                        )
                    })}
                    <div className="porgress-bar"
                        style={{
                            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
                            marginLeft: margins.marginLeft,
                            marginRight: margins.marginRight
                        }}>
                        <div className="progress" style={{ width: `${calculateProgressBar()}%` }}></div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <ActiveComponent />
            </div>

            <div className='flex justify-center mt-5'>
                {!isCompleate && (
                    <button 
                    disabled={!validateStep(currentStep)}
                    className='px-5 rounded-md py-1.5 md:w-[15%] mx-auto bg-[#7c3aed] text-lg text-white ' onClick={handleNext}>{currentStep === stepsConfig.length ? "Place Order" : "Next"}</button>
                )}
            </div>

            <OrderSuccessPopup
                isOpen={showPopup}
                //onViewOrder={() => console.log("View Order")}
                onContinueShopping={() => {
                    setShowPopup(false);
                }}
            />
        </>
    )
}

export default CheckoutStepper;
