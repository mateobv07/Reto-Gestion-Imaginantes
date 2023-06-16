import app from './app.js';
import request from 'supertest';

describe("Test Login and get assignments", () => {

    test("Invalid login body", () => {
        return request(app)
            .post("/user/login")
            .send({studentID:"A01635675"})
            .then(response => {
                expect(response.statusCode).toBe(400);
                expect(response._body.message).toBe("Invalid body");
            })
    })

    test("Invalid login credentials", () => {
        return request(app)
            .post("/user/login")
            .send({studentID:"test",password:"password123"})
            .then(response => {
                expect(response.statusCode).toBe(401);
                expect(response._body.message).toBe("Invalid credentials");
            })
    })

    test("Get assignments without jwt token", () => {
        return request(app)
            .get("/assignment")
            .then(response => {
                expect(response.statusCode).toBe(401);
                expect(response._body.message).toBe("Missing Authorization header");
            })
    })

    test("Login and get assignments verifying token", () => {
        return request(app)
            .post("/user/login")
            .send({studentID:"A01635675",password:"password123"})
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response._body).toHaveProperty('accessToken');
                //get assignments using token
                return request(app)
                    .get("/assignment?status=2")
                    .set('authorization','Bearer ' + response._body.accessToken)
                    .then(res => {
                        expect(res.statusCode).toBe(200);
                        expect(res._body.length).toBeGreaterThan(0);
                    })
            })
    })

});