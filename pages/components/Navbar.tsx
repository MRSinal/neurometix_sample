import Link from 'next/link'
import styled from 'styled-components'


const Nav = styled.nav`
    height: 130px;
    background: black;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
`;
const StyledLink = styled.a`
    padding: 0rem 4rem;
    text-decoration: none;
    color: #d9dad7;
    cursor: pointer;
`;
const Navbar = () => {
    return (
        <Nav>
            <div className='text-2xl font-josefin uppercase'>
                <Link href='/' passHref id='navlink'>
                    <StyledLink>
                        NTX
                    </StyledLink>
                </Link>
            </div>
            <div className='text-lg font-futura uppercase'>
                <Link href='#vision' id='navlink'>
                    <StyledLink> Vision</StyledLink>
                </Link>
                <Link href='../About' passHref id="navlink">
                    <StyledLink>About</StyledLink>
                </Link>
                <Link href='#service' passHref id='navlink'>
                    <StyledLink>Services &amp; Solutions</StyledLink>
                </Link>
            </div>

        </Nav>
    )
}

export default Navbar

