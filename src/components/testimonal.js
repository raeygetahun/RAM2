import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Testimonal() {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls dark>
        <MDBCarouselInner>
          <MDBCarouselItem className="active text-center">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Maria Kate</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I have been using RAM Trucking Group for my shipping needs 
                  and have been extremely satisfied with their service.
                    The drivers are professional and reliable, and the dispatch
                    team is efficient and accommodating. I highly recommend RAM
                     Trucking to anyone in need of a dependable trucking company.
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">John Doe</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I have been using RAM Trucking Group for the past year, and I have consistently
                   been satisfied with their service. The dispatch team is always helpful
                    and willing to accommodate my scheduling needs, and the drivers are
                     courteous and efficient. I highly recommend them to anyone
                      in need of a top-quality trucking company.
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Anna Deynah</h5>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  I have been using RAM Trucking Group for all of my shipping needs,
                   and I have consistently been impressed with their level of service.
                    The dispatch team is always quick to respond to my requests and
                     the drivers are professional and reliable. I highly recommend RAM
                      Trucking Group to anyone in need of a trustworthy and dependable trucking
                       company
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}