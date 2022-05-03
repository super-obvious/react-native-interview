import React, {FunctionComponent, useContext} from "react";
import {act, renderHook, ResultContainer} from '@testing-library/react-hooks';
import {AppContext, ProfileContextType, AppContextProvider} from "../ProfileContext";
import {ActionOnFunds, ActionStatus, Profile, ProfileState} from "../../domain/Profile";
import {UserInfo} from "react-native-auth0";
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';


describe('Profile context tests', () => {
    let wrapper: FunctionComponent;
    let profileContext: ResultContainer<ProfileContextType>;

    beforeEach(() => {
        wrapper = ({children}) => <AppContextProvider>{children}</AppContextProvider>;
        profileContext = renderHook(() => useContext(AppContext), {wrapper});
    });
    it('should create default profile', () => {
        expect(profileContext.result.current.profile.status).toBe(ProfileState.New);
        expect(profileContext.result.current.profile.transactions).toEqual([]);
    });

    it('should update profile status', () => {
        act(() => {
            profileContext.result.current.setStatus(ProfileState.OnboardingComplete);
        });
        expect(profileContext.result.current.profile.status).toBe(ProfileState.OnboardingComplete);
    });

    it('should add transaction', () => {
        act(() => {
            profileContext.result.current.addTransaction({
                status: ActionStatus.Submitted,
                action: ActionOnFunds.Withdrawal,
                submittedAt: new Date(),
                amount: '100',
                targetAllocation: new Date(),
                unitPrice: 123,
                units: 1
            });
        });

        expect(profileContext.result.current.profile.transactions?.length).toBe(1);
    });

    it('should save address', () => {
        const address = {
            state: 'NSW',
            postcode: '2000',
            apartment: '1',
            street: 'York',
            streetNumber: '11',
            suburb: 'Sydney'
        };

        act(() => {
            profileContext.result.current.setAddress(address);
        });

        expect(profileContext.result.current.profile.address).toBe(address);
    });

    it('should login a new user', async () => {
        jest.resetAllMocks();
        jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

        await act(async () => {
            await profileContext.result.current.login({
                email: 'test@test.com',
                authProfile: undefined,
                address: {}
            } as Profile, {email: 'test@test.com'} as UserInfo);
        });
        expect(profileContext.result.current.profile.email).toStrictEqual('test@test.com');
        expect(mockAsyncStorage.setItem.mock.calls[0][0]).toStrictEqual('@SuperObviousApp:userInfo:test@test.com');
    });
});