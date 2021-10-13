import React, { Component } from "react";
import Card from 'components/Navbar & Cards/CardsUI';


class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"https://cf.bstatic.com/xdata/images/hotel/max1280x900/14449352.jpg?k=206bde0a6fdee12cb490ce5bf3c74ec0e9c472868e21b1218adba03f054d1683&o=&hp=1"} cardtitle="The George Hotel" cardtxt='Enter through The George Hotel’s revolving doors to experience tradition and quality in the warm and welcoming atmosphere of a gentler time. The nostalgic wood panelling, old oak beams, antique furniture and old local prints, makes this 300 year old  hotel a treasure to be found.' btnsrc="https://www.everbrightgrouphotels.com/thegeorgehotel" />
                    </div>
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"https://cdn.escapismmagazine.com/gallery/5c62a5776ffca.jpeg"} cardtitle="Another Place, The Lake" cardtxt='A relaxed hotel on the shores of Ullswater in the Lake District. Another Place, The Lake gives you days together and days apart as a family, time around a table for dinner, by the pool, wild swimming or stand-up paddleboarding on the lake. It’s about the good things in life: having fun, eating well, letting go. Fancy a romantic getaway or a bit of pampering?' btnsrc="https://another.place/" />
                    </div>
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"http://www.brooklandsguesthouse.com/wp-content/uploads/photo-gallery/BrooklandsGH_BreakfastRoom-8Web.jpg"} cardtitle="Brooklands B&B" cardtxt="If you're looking for the perfect escape, combining elegant accommodation with a touch of luxury, then Brooklands Guest House is the guest house for you. Due to our convenient Penrith location, our 5 star gold rated accommodation, Brooklands Guesthouse is quickly becoming one of the area's most popular places to stay, situated in a bustling market town." btnsrc="http://www.brooklandsguesthouse.com/" />
                    </div>
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"https://thequietsite.co.uk/wp-content/uploads/2017/01/pod-7-night-people.jpg"} cardtitle="The Quiet Site" cardtxt='The Quiet Site is an Award Winning, Carbon Neutral Holiday Park set amongst the stunning fells that overlook Ullswater. There’s something for everyone at The Quiet Site: from our rustic hobbit holes and gingerbread houses to traditional camping and hardstanding pitches. World Class attractions just a few minutes from The Quiet Site include Aira Force waterfalls (superb circular walk from us), Ullswater Steamers and Lowther Castle.' btnsrc="https://thequietsite.co.uk/" />
                    </div>
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"https://www.lakedistrictcamping.co.uk/images/campsites/side_farm/side1_940x498.jpg"} cardtitle="Side Farm Campsite" cardtxt="They describe themselves as a small simple site, nothing fancy. Hot showers, toilets, washbasins, washing up area, washing machine and dryer and that's it! But they are, in fact, an ideal base for walking, biking, fishing, or simply relaxing. Located on the shore of lake Ullswater and near Place Fell, they are definitely the most scenically placed campsite in England." btnsrc="https://sidefarmcampsite.co.uk/" />
                    </div>
                    <div className="col-md-4 d-flex">
                        <Card imgsrc={"https://p4.skchase.com/media/14124/nl-gv-2.jpg?umbid=34131"} cardtitle="NORTH LAKES HOTEL & SPA" cardtxt="The luxurious North Lakes Hotel & Spa offers modern comfort whether as a base to launch yourself into the Lake District or as the perfect stopover between England and Scotland. They have rooms to suit all tastes and budgets from cosy doubles to signature family rooms and suites, every one with extra comfort in mind and treats for your VI Little P’s. Pamper yourself with specialist spa and beauty treatments or simply have some
fun in the pool. Their Afternoon Tea is a treasured tradition of delicious and imaginative offerings full of great quality ingredients and tempting regional flavours showcasing Cumbrian produce. It is a firm favourite for any celebration, occasion or treat."
                            btnsrc="https://www.northlakeshotel.co.uk/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;