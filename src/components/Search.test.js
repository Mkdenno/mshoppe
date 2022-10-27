import {render, screen, cleanup} from '@testing-library/react'
import Search from './Search';

test('should render search component', ()=>{
    render(<Search/>)
    const searchElement = screen.getByTestId("search-1")
    expect(searchElement).toBeInTheDocument();
    
})