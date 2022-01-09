import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';
import { useCurrentUser } from '@/hooks/user';
import Header from '../header';

jest.mock('@/hooks/user');

const mockedUseCurrentUser = useCurrentUser as jest.Mock<any>;

describe('Header View', () => {
  it('로그인이 되어있다면 logout 버튼이 노출되어야 한다.', () => {
    // given
    mockedUseCurrentUser.mockImplementation(() => ({
      data: {
        id: 1,
        nickname: 'kwon',
        image: '',
      },
    }));

    // when
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );
    const target = screen.getByText('Logout');

    // then
    expect(target).toBeInTheDocument();
  });

  it('로그인이 되어있지 않다면 login 버튼이 노출되어야 한다.', () => {
    // given
    mockedUseCurrentUser.mockImplementation(() => ({
      data: {},
    }));

    // when
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );
    const target = screen.getByText('login');

    // then
    expect(target).toBeInTheDocument();
  });
});
