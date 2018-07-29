import React, { Component } from 'react';
import { Mask, View } from 'mdbreact';
import { Slider, Slide } from 'react-materialize';
import Hero from './Hero';

export default class Landing extends Component {
    render() {
        return (
            <Slider className="fullscreen">
                <Slide
                    src="/img/landing/landing.jpg"
                    title="This is our big Tagline!">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="/img/landing/landing.jpg"
                    title="Left aligned Caption"
                    placement="left">
                    Here's our small slogan.
                </Slide>
                <Slide
                    src="/img/landing/landing.jpg"
                    title="Right aligned Caption"
                    placement="right">
                    Here's our small slogan.
                </Slide>
            </Slider>
            /*<div className="landingCont">
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
                                    <video className="d-block" autoPlay loop>
                                        <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                                    </video>
                                    <Mask overlay="teal-light" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Geirangerfjorden</h3>
                                    <p>Selve juvelen blant de norske fjordene</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <View>
                                    <video className="d-block" autoPlay loop>
                                        <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                                    </video>
                                    <Mask overlay="indigo-light" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                              </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <View>
                                    <video className="d-block" autoPlay loop>
                                        <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                                    </video>
                                    <Mask overlay="pink-light" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                              </CarouselCaption>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>
                </div>
            </div>*/
        )
    }
}
