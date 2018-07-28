import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, Mask, View } from 'mdbreact';
import Hero from './Hero';

export default class Landing extends Component {
    render() {
        return (
            <div className="landingCont">
                <div className="carouselCont">
                    <Carousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">
                                <View>
                                    <video className="video-fluid d-block" autoPlay loop>
                                        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                                    </video>
                                    <Mask overlay="black-strong" />

                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Geirangerfjorden</h3>
                                    <p>Selve juvelen blant de norske fjordene</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <video className="video-fluid d-block" autoPlay loop>
                                    <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                                </video>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <video className="video-fluid d-block" autoPlay loop>
                                    <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                                </video>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                              </CarouselCaption>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>
                </div>
            </div>
        )
    }
}
