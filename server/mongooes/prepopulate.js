import faker from 'faker';
import {User, Album, Music} from './connect';

function prepopulate() {
    let userGlobal,
        noUsers = 5,
        noAlbums = 2,
        noMusic = 4,
        users = [],
        albums = [];
    User.remove()
        .then(() => {
            return Album.remove();
        })
        .then(() => {
            return Music.remove();
        })
        .then((res) => {
            let user;
            for (let i = 0; i < noUsers; i++) {
                user = new User({
                    email: faker.internet.email(),
                    username: faker.internet.userName(),
                    firstname: faker.lorem.word(),
                    lastname: faker.lorem.word(),
                    password: faker.internet.password(),
                    profileImage: 'https://marriedbiography.com/wp-content/uploads/2018/01/DJ-Khaled.jpg',
                    coverImage: 'https://i2.wp.com/www.capitalfm.co.ke/campus/files/2017/12/djkhaled.jpg?resize=870%2C490&ssl=1'
                });
                users.push(user);
            }


            return User.collection.insert(users);
        })
        .then((res) => {
            users = res.ops;
            let album = new Album({
                title: faker.hacker.abbreviation(),
                description: faker.lorem.lines(2),
                albumArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/DJ_Khaled_Suffering_from_Success.jpg/220px-DJ_Khaled_Suffering_from_Success.jpg'
            });
            return users[0].addAlbum(album);
        })
        .then((res) => {
            let album = res;
            let music = new Music({
                title: faker.hacker.abbreviation(),
                genre: faker.commerce.productName(),
                streamUrl: 'https://api.soundcloud.com/tracks/168227883/stream',
                coverArt: 'https://i1.sndcdn.com/artworks-000091355749-pz52yp-large.jpg'
            })
            return album.addMusic(music);
        })
        .then((res) => {
            console.log("Successfully added albums, users and music");
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {prepopulate};