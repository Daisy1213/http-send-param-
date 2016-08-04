/**
 *
 * Created by zhangsha on 16-8-4.
 */
const supertest = require('supertest');
const app = require('../src/server');
const request = supertest(app);

describe("get/query", function () {
    it('should get param by query', function (done) {
        request
            .get('/query/?name=manny')
            .expect({name: "manny"})
            .end((err, res) => {
            if (err) {
                done.fail(err);
            } else {
                done();
    }
    })
    });
});

describe('get/params', function () {
    it('should get param by params', function (done) {
        request
            .get('/params/jony')
            .expect({us: 'jony'})
            .end((err, res) => {
            if (err) {
                done.fail(err);
            } else {
                done();
    }
    })
    });
});

describe('post/header', function () {
    it('should get param by header', function (done) {
        request
            .post('/header')
            .set({name: 'blue'})
            .expect('blue')
            .end((err, res) => {
            if (err) {
                done.fail(err);
            } else {
                done();
    }
    })
    });
});

describe('post/body', function () {
    it('should get param by body', function (done) {
        request
            .post('/user')
            .send({name: '123'})
            .expect({name: '123'})
            .end((err, res) => {
            if (err) {
                done.fail(err);
            } else {
                done();
    }
    })
    });
});

describe('post/json', function () {
    it('should get param by json', function (done) {
        request
            .post('/json')
            .send({"name": "tj", "pet": "tobi"})
            .expect({"name": "tj", "pet": "tobi"})
            .end((err, res) => {
            if (err) {
                done.fail(err);
            } else {
                done();
    }
    })
    });
});