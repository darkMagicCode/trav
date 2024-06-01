import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '@/app/homePage';
import { useCart } from '@/context/CartContext';

// Mock the `useCart` hook
jest.mock('@/context/CartContext', () => ({
  useCart: jest.fn(),
}));

// Mock the `toast` function
jest.mock('@/components/ui/use-toast', () => ({
  toast: jest.fn(),
}));

// // Mock the `DropdownMenu` components
// jest.mock('@radix-ui/react-dropdown-menu', () => ({
//   DropdownMenu: ({ children }:any) => <div>{children}</div>,
//   DropdownMenuTrigger: ({ children }:any) => <div>{children}</div>,
//   DropdownMenuContent: ({ children }:any) => <div>{children}</div>,
//   DropdownMenuLabel: ({ children }:any) => <div>{children}</div>,
//   DropdownMenuItem: ({ children }:any) => <div>{children}</div>,
// }));

// Mock data
const mockItems = [
  { name: 'Item 1', description: 'Description 1', price: '10.00' },
  { name: 'Item 2', description: 'Description 2', price: '20.00' },
];

describe('HomePage', () => {
  beforeEach(() => {
    useCart.mockReturnValue({
      dispatch: jest.fn(),
    });
  });

  it('renders the HomePage component', () => {
    render(<HomePage items={mockItems} />);
  });

  it('adds item to cart when "Add To Cart" button is clicked', () => {
    const { toast } = require('@/components/ui/use-toast');
    const { dispatch } = useCart();
    
    render(<HomePage items={mockItems} />);

    const openCartButton = screen.getAllByText(/open cart/i);
    fireEvent.click(openCartButton[0]);
    
    // Using a more flexible matcher to find the "Add To Cart" button
    // const addToCartButton = screen.getByText((content:any, element:any) => {
    //   return element.tagName === 'Button' && content.match(/Add To Cart/i);
    // });
    // fireEvent.click(addToCartButton);
    
    expect(toast).toHaveBeenCalledWith({
      variant: "default",
      title: "Added to cart",
      description: `${mockItems[0].name} added to cart`,
    });
    expect(dispatch).toHaveBeenCalledWith({ type: "ADD_TO_CART", item: mockItems[0] });
  });
  
});
