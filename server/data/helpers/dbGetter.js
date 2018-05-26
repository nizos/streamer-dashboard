// Import Environment data
require('dotenv').config();

// Import the required modules
const async             = require('async');
const database          = require('../db');
const AppUser           = require('../../models/appUser');
const dbGetter          = {};


// GET APP USER PROFILE
dbGetter.getAppUserProfile = async function (appUserId) {
    let err, result;

    result = await AppUser.find({ id: appUserId}, {id: 1, login: 1, display_name: 1, prefered_username: 1, type: 1, broadcaster_type: 1, description: 1, profile_image_url: 1, offline_image_url: 1, view_count: 1, email: 1, _id: 0});
    if(err) {
        return 0;
    };

    if (!result[0]) {
        return 0;
    };


    return result[0];
};

// GET LOGIN
dbGetter.getLogin = async (appUserId) => {
    AppUser.findOne({id : appUserId}, {login: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get login from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.login;
                console.log(`Login: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Login: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET DISPLAY NAME
dbGetter.getDisplayName = (appUserId) => {
    AppUser.findOne({id : appUserId}, {display_name: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get display name from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.display_name;
                console.log(`Display name: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Display name: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET TYPE
dbGetter.getType = (appUserId) => {
    AppUser.findOne({id : appUserId}, {type: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get type from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.type;
                console.log(`Type: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Type: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET BROADCASTER TYPE
dbGetter.getBroadcasterType = (appUserId) => {
    AppUser.findOne({id : appUserId}, {broadcaster_type: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get broadcaster type from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.broadcaster_type;
                console.log(`Broadcaster type: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Broadcaster type: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET DESCRIPTION
dbGetter.getDescription = (appUserId) => {
    AppUser.findOne({id : appUserId}, {description: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get description from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.description;
                console.log(`Description: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Description: ${queryResult}`);
                return queryResult;
            }

        }
    });
};


// GET PROFILE IMAGE URL
dbGetter.getProfileImageUrl = (appUserId) => {
    AppUser.findOne({id : appUserId}, {profile_image_url: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get profile image url from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.profile_image_url;
                console.log(`Profile image url: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Profile image url ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET OFFLINE IMAGE URL
dbGetter.getOfflineImageUrl = (appUserId) => {
    AppUser.findOne({id : appUserId}, {offline_image_url: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get offline image url from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.offline_image_url;
                console.log(`Offline image url: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Offline image url: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET VIEW COUNT
dbGetter.getViewCount = (appUserId) => {
    AppUser.findOne({id : appUserId}, {view_count: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get view count from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.view_count;
                console.log(`View count: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`View count: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET EMAIL
dbGetter.getEmail = (appUserId) => {
    AppUser.findOne({id : appUserId}, {email: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get email from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.email;
                console.log(`Email: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Email: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET JWT HEADER
dbGetter.getJWTHeader = (appUserId) => {
    AppUser.findOne({id : appUserId}, {alg: 1, typ: 1, kid: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get JWT header from database');
            console.log(err);
            const queryResult = {
                alg:                    'N/A',
                typ:                    'N/A',
                kid:                    'N/A'
            };
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = {
                    alg:                    app_user.alg,
                    typ:                    app_user.typ,
                    kid:                    app_user.kid
                };
                console.log(`JWT header: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = {
                    alg:                    'N/A',
                    typ:                    'N/A',
                    kid:                    'N/A'
                };
                console.log(`JWT header: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET ALG
dbGetter.getAlg = (appUserId) => {
    AppUser.findOne({id : appUserId}, {alg: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get alg from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.alg;
                console.log(`Alg: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Alg: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET TYP
dbGetter.getTyp = (appUserId) => {
    AppUser.findOne({id : appUserId}, {typ: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get typ from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.typ;
                console.log(`Typ: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Typ: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET KID
dbGetter.getKid = (appUserId) => {
    AppUser.findOne({id : appUserId}, {kid: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get kid from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.kid;
                console.log(`Kid: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Kid: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET JWT PAYLOAD
dbGetter.getJWTPayload = (appUserId) => {
    AppUser.findOne({id : appUserId}, {aud: 1, exp: 1, iat: 1, iss: 1, sub: 1, azp: 1, prefered_username: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get JWT payload from database');
            console.log(err);
            const queryResult = {
                aud:                        'N/A',
                exp:                        'N/A',
                iat:                        'N/A',
                iss:                        'N/A',
                sub:                        'N/A',
                azp:                        'N/A',
                prefered_username:          'N/A'
            };
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = {
                    aud:                        app_user.aud,
                    exp:                        app_user.exp,
                    iat:                        app_user.iat,
                    iss:                        app_user.iss,
                    sub:                        app_user.sub,
                    azp:                        app_user.azp,
                    prefered_username:          app_user.prefered_username
                };
                console.log(`JWT payload: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = {
                    aud:                        'N/A',
                    exp:                        'N/A',
                    iat:                        'N/A',
                    iss:                        'N/A',
                    sub:                        'N/A',
                    azp:                        'N/A',
                    prefered_username:          'N/A'
                };
                console.log(`JWT payload: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET AUD
dbGetter.getAud = (appUserId) => {
    AppUser.findOne({id : appUserId}, {aud: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get aud from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.aud;
                console.log(`Aud: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Aud: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET EXP
dbGetter.getExp = (appUserId) => {
    AppUser.findOne({id : appUserId}, {exp: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get exp from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.exp;
                console.log(`Exp: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Exp: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET IAT
dbGetter.getIat = (appUserId) => {
    AppUser.findOne({id : appUserId}, {iat: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get iat from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.iat;
                console.log(`Iat: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Iat: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET ISS
dbGetter.getIss = (appUserId) => {
    AppUser.findOne({id : appUserId}, {iss: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get iss from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.iss;
                console.log(`iss: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`iss: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET SUB
dbGetter.getSub = (appUserId) => {
    AppUser.findOne({id : appUserId}, {sub: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get sub from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.sub;
                console.log(`Sub: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Sub: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET AZP
dbGetter.getAzp = (appUserId) => {
    AppUser.findOne({id : appUserId}, {azp: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get azp from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.azp;
                console.log(`azp: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`azp: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET PREFERED USERNAME
dbGetter.getPreferedUsername = (appUserId) => {
    AppUser.findOne({id : appUserId}, {prefered_username: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get prefered_username from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.prefered_username;
                console.log(`Prefered username: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Prefered username: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET JWT ID TOKEN
dbGetter.getJWTIdToken = (appUserId) => {
    AppUser.findOne({id : appUserId}, {access_token: 1, expires_in: 1, id_token: 1, scope: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get JWT id token from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = {
                    access_token:            app_user.access_token,
                    expires_in:              app_user.expires_in,
                    id_token:                app_user.id_token,
                    scope:                   app_user.scope
                };
                console.log(`JWT id token: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = {
                    access_token:            'N/A',
                    expires_in:              'N/A',
                    id_token:                'N/A',
                    scope:                   'N/A'
                };
                console.log(`JWT id token: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET ACCESS TOKEN
dbGetter.getAccessToken = (appUserId) => {
    AppUser.findOne({id : appUserId}, {access_token: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get access token from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.access_token;
                console.log(`Access token: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Access token: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET EXPIRES IN
dbGetter.getExpiresIn = (appUserId) => {
    AppUser.findOne({id : appUserId}, {expires_in: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get expires in from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.expires_in;
                console.log(`Expires in: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Expires in: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET ID TOKEN
dbGetter.getIdToken = (appUserId) => {
    AppUser.findOne({id : appUserId}, {id_token: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get id token from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.id_token;
                console.log(`Id token: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Id token: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET SCOPE
dbGetter.getScope = (appUserId) => {
    AppUser.findOne({id : appUserId}, {scope: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get scope from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.scope;
                console.log(`Scope: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Scope: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET JWT
dbGetter.getJWT = (appUserId) => {
    AppUser.findOne({id : appUserId}, {alg: 1, typ: 1, kid: 1, aud: 1, exp: 1, iat: 1, iss: 1, sub: 1, azp: 1, prefered_username: 1, access_token: 1, expires_in: 1, id_token: 1, scope: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get JWT from database');
            console.log(err);
            const queryResult = {
                alg:                    'N/A',
                typ:                    'N/A',
                kid:                    'N/A',
                aud:                    'N/A',
                exp:                    'N/A',
                iat:                    'N/A',
                iss:                    'N/A',
                sub:                    'N/A',
                azp:                    'N/A',
                prefered_username:      'N/A',
                access_token:           'N/A',
                expires_in:             'N/A',
                id_token:               'N/A',
                scope:                  'N/A'
            };
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = {
                    alg:                    app_user.alg,
                    typ:                    app_user.typ,
                    kid:                    app_user.kid,
                    aud:                    app_user.aud,
                    exp:                    app_user.exp,
                    iat:                    app_user.iat,
                    iss:                    app_user.iss,
                    sub:                    app_user.sub,
                    azp:                    app_user.azp,
                    prefered_username:      app_user.prefered_username,
                    access_token:           app_user.access_token,
                    expires_in:             app_user.expires_in,
                    id_token:               app_user.id_token,
                    scope:                  app_user.scope
                };
                console.log(`JWT: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = {
                    alg:                    'N/A',
                    typ:                    'N/A',
                    kid:                    'N/A',
                    aud:                    'N/A',
                    exp:                    'N/A',
                    iat:                    'N/A',
                    iss:                    'N/A',
                    sub:                    'N/A',
                    azp:                    'N/A',
                    prefered_username:      'N/A',
                    access_token:           'N/A',
                    expires_in:             'N/A',
                    id_token:               'N/A',
                    scope:                  'N/A'
                };
                console.log(`JWT: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET CLIENT ID
dbGetter.getClientId = (appUserId) => {
    AppUser.findOne({id : appUserId}, {client_id: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get client id from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.client_id;
                console.log(`Client id: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Client id: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET REDIRECT URI
dbGetter.getRedirectUri = (appUserId) => {
    AppUser.findOne({id : appUserId}, {redirect_uri: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get redirect uri from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.redirect_uri;
                console.log(`Redirect uri: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Redirect uri: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET RESPONSE TYPE
dbGetter.getResponseType = (appUserId) => {
    AppUser.findOne({id : appUserId}, {response_type: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get response type from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.response_type;
                console.log(`Response type: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Response type: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET REFRESH TOKEN
dbGetter.getRefreshToken = (appUserId) => {
    AppUser.findOne({id : appUserId}, {refresh_token: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get refresh token from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.refresh_token;
                console.log(`Refresh token: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Refresh token: ${queryResult}`);
                return queryResult;
            }
        }
    });
};


// GET CREATED AT
dbGetter.getCreatedAt = (appUserId) => {
    AppUser.findOne({id : appUserId}, {created_at: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get created at from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.created_at;
                console.log(`Created at: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Created at: ${queryResult}`);
                return queryResult;
            }
        }
    });
};

// GET UPDATED AT
dbGetter.getUpdatedAt = (appUserId) => {
    AppUser.findOne({id : appUserId}, {updated_at: 1, _id: 0}, (err, app_user) => {
        if(err) {
            console.log('Error: Could not get updated at from database');
            console.log(err);
            const queryResult = 'N/A';
            return queryResult;
        } else {
            if(app_user !== null) {
                const queryResult = app_user.updated_at;
                console.log(`Updated at: ${queryResult}`);
                return queryResult;
            } else {
                const queryResult = 'N/A';
                console.log(`Updated at: ${queryResult}`);
                return queryResult;
            }

        }
    });
};


// Export dbGetter function
module.exports = dbGetter;
