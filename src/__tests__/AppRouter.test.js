import React from 'react';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk'

import HomePage from '../components/OverviewPages/HomePage';
import NotFoundPage from '../components/OverviewPages/NotFoundPage';
import PersonalOverviewPage from '../components/OverviewPages/PersonalOverviewPage';
import PublicOverviewPage from '../components/OverviewPages/PublicOverviewPage';
import RepositoryDetailPage from '../components/repositoryDetail/RepositoryDetailPage';
import NavigationBar from '../components/navigationBar/NavigationBar';

jest.mock('./../components/OverviewPages/HomePage', () => jest.fn());
jest.mock('./../components/OverviewPages/NotFoundPage', () => jest.fn());
jest.mock('./../components/OverviewPages/PersonalOverviewPage', () => jest.fn());
jest.mock('./../components/OverviewPages/PublicOverviewPage', () => jest.fn());
jest.mock('./../components/repositoryDetail/RepositoryDetailPage', () => jest.fn());
jest.mock('./../components/navigationBar/NavigationBar', () => jest.fn());


const initialState = {};
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store = mockStore(initialState);


describe("App Router", () => {
  it("should render page header and HomePage on default route", () => {
    let store = mockStore(initialState);

    NavigationBar.mockImplementation(() => <div>PageHeaderMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  it("should render page header and publicRepoList for public repos route", () => {
    NavigationBar.mockImplementation(() => <div>PageHeaderMock</div>);
    PublicOverviewPage.mockImplementation(() => <div>PublicRepoPageMock</div>);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/public']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PublicRepoPageMock")).toBeInTheDocument();
  });

  it("should render page header and personalRepoList for personal repos route", () => {
    NavigationBar.mockImplementation(() => <div>PageHeaderMock</div>);
    PersonalOverviewPage.mockImplementation(() => <div>PersonalRepoPageMock</div>);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/personal']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PersonalRepoPageMock")).toBeInTheDocument();
  });


  it("should render page header and RepositoryDetailPage for specific repo route", () => {
    NavigationBar.mockImplementation(() => <div>PageHeaderMock</div>);
    RepositoryDetailPage.mockImplementation(() => <div>RepoDetailPageMock</div>);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/repos/test']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("RepoDetailPageMock")).toBeInTheDocument();
  });

  it("should render page header and PageNotFound for invalid route", () => {
    let store = mockStore(initialState);

    NavigationBar.mockImplementation(() => <div>PageHeaderMock</div>);
    NotFoundPage.mockImplementation(() => <div>PageNotFoundMock</div>);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/invalid/route']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("PageHeaderMock")).toBeInTheDocument();
    expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
  });
});