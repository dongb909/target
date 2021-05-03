import { render, screen, fireEvent, act, wait } from "@testing-library/react";
import App from "./App";
import routeDataMock from "./mocks/routeDataMock";
import directionDataMock from "./mocks/directionDataMock";
import stopsDataMock from './mocks/stopsDataMock';
import axios from "axios";

jest.mock("axios");
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("get routes data upon inital render", async () => {
	axios.get.mockImplementation((url) => {
    console.log(url)
    if (url === 'https://svc.metrotransit.org/nextripv2/routes') {
        return Promise.resolve(routeDataMock);
    // } else if (url === 'https://svc.metrotransit.org/nextripv2/directions/2') {
    //   return Promise.resolve(directionDataMock);
  } else {
    return Promise.resolve(stopsDataMock);
  }
});

		// .mockImplementationOnce(() => Promise.resolve(routeDataMock))
		// .mockImplementationOnce(() => Promise.resolve(directionDataMock));
	// .mockImplementationOnce(()=> Promise.resolve(stopsDataMock))
	const { getByTestId, findByTestId } = render(<App />);
	act(()=>{fireEvent.change(getByTestId("selectRouteOption"), { target: { value: ["Route 2,2"] } })});
	expect(screen.getByText("Route 2")).toBeInTheDocument()
  // await screen.findByText("Eastbound");
	// await findByTestId("selectDirectionOption")
  fireEvent.change(getByTestId("selectDirectionOption"), {
		target: { value: 1 },
	});
  await wait(() => expect(screen.getByText("Eastbound")).toBeInTheDocument());
	// fireEvent.change(getByTestId('selectStopsOption'), { target: { value: 2 } })
	expect(true).toBe(true);
});
