import Statistics from '../../common/Statistics'
import CustomForm from '../../common/CustomForm'
import Agreements from '../../common/Agreements'
import ServicesList from '../../common/ServicesList'
import IATest from '../../common/IATest'

const ClinicalAnalysis = () => (
    <>
        <CustomForm type="healthScreening" />
        <Statistics />
        <ServicesList />
        <IATest />
        <Agreements />
    </>
)

export default ClinicalAnalysis
