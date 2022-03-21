
import React,{Suspense} from 'react';
import useNearScreen from '../../hooks/useNearScreen';
/* import TrendingSearch from './TrendingSeaches'; 
 */

const TrendingSearch = React.lazy(
    ()=>import('./TrendingSeaches')
)

export default function LazyTrending() {
 const {isNearScreen,elementRef} = useNearScreen();

return(
<div ref={elementRef} className="container-trending">
    <Suspense fallback="null">
    {isNearScreen ? <TrendingSearch /> :null }
    </Suspense>
</div>

)
    
}