import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import Add from '../components/crud/Add';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
                <Routes>
                    <Route path="/add" element={<Add />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
