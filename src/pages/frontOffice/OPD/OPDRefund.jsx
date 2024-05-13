import React from 'react'
import Accordion from "@app/components/UI/Accordion";
import { useTranslation } from 'react-i18next';
import Heading from '@app/components/UI/Heading';
import Input from "@app/components/formComponent/Input";
import ReactSelect from '@app/components/formComponent/ReactSelect';
import TestAddingTable from '../../../components/UI/customTable/frontofficetables/TestAddingTable';
import PaymentGateway from '../../../components/front-office/PaymentGateway';

export default function OPDRefund() {
    const [t] = useTranslation();
    return (
        <>
            <div className="card patient_registration border">
                <Heading title={t("FrontOffice.OPD.OPDRefund.Patient_Details")} />
                <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 ml-2 mt-2">
                    <Input
                        type="text"
                        className="form-control"
                        id="ReceiptNo"
                        name="receiptno"
                        lable={t("FrontOffice.OPD.OPDRefund.ReceiptNo")}
                        placeholder=" "
                        required={true}
                        respclass="col-xl-2.5 col-md-3 col-sm-4 col-12"
                    />
                    <div className="col-xl-2.5 col-md-3 col-sm-4 col-12">
                        <button className="btn btn-sm btn-info "> {t("FrontOffice.OPD.search")} </button>
                    </div>
                </div>
            </div>
            <div className="card patient_registration border">
                <Heading title={t("FrontOffice.OPD.OPDRefund.Patient_Details")} />
                <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 ml-2 mt-2">
                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'> {t("FrontOffice.OPD.patientRegistration.UHID")} </h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> 226503 </h6>
                        </div>
                    </div>
                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'> {t("FrontOffice.OPD.OPDRefund.Patient_Name")} </h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> Mayank </h6>
                        </div>
                    </div>

                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'>{t("FrontOffice.OPD.OPDRefund.Age")} </h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> 25.2 YRS </h6>
                        </div>
                    </div>

                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'>{t("FrontOffice.OPD.OPDRefund.Amount")} </h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> 17000 </h6>
                        </div>
                    </div>

                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'>{t("FrontOffice.OPD.OPDRefund.Doctor")}</h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> Abhay </h6>
                        </div>
                    </div>

                    <div className='col-xl-2.5 col-md-3 col-sm-4 col-12'>
                        <div className='d-flex'>
                            <h6 className='text-dark font-weight-bold'>{t("FrontOffice.OPD.OPDRefund.IPD_No")}</h6>
                            <h6 className='ml-2 mr-2 text-dark'> : </h6>
                            <h6> 457 </h6>
                        </div>
                    </div>



                </div>
            </div>

            <div className="card patient_registration border">
                <Heading title={t("FrontOffice.OPD.OPDRefund.Prescribed_Items")} />
                <TestAddingTable />
                <PaymentGateway />
            </div>
        </>
    )
}
