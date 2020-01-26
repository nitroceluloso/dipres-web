
import * as React from 'react';

export interface HomeProps {
    
}
 
export interface HomeState {
    
}
 
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {   };
    }
    render() { 
        return ( 
            <h1>holi</h1>
         );
    }
}
 
export default Home;