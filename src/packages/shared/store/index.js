import api from '../api'

export const GET_USER = 'getUser'
export const FETCH_ADDRESSES = 'fetchAddresses'
export const LOADING = 'loading'
export const FETCH_SERVICE = 'fetchService'
export const FETCH_ESTIMATE_COST = 'fetchEstimateCost'
export const FETCH_WAREHOUSE = 'fetchWareHouses'
export const UPDATE_PROFILE = 'updateProfile'
export const GET_CONFIGS = 'getConfigs'

import union from 'lodash/union'
import addresses from '../../../assets/json/address.json'

export const state = {
  user: {},
  referral_link: '',
  addresses: [],
  isLoading: false,
  service_detail: {},
  estimateCost: [],
  wareHouses: [],
  countNoti: 0,
  countNotiAll: 0,
  configs: {},
}

export const mutations = {
  [GET_USER]: (state, payload) => {
    state.user = payload.user
    state.referral_link = payload.referral_link
  },
  [GET_CONFIGS]: (state, payload) => {
    state.configs = payload
  },
  [FETCH_ADDRESSES]: (state, payload) => {
    state.addresses = payload
  },
  [LOADING]: (state, payload) => {
    state.isLoading = payload
  },
  [FETCH_SERVICE]: (state, payload) => {
    state.service_detail = payload
  },
  [FETCH_ESTIMATE_COST]: (state, payload) => {
    state.estimateCost = payload
  },
  [FETCH_WAREHOUSE]: (state, payload) => {
    state.wareHouses = payload
  },
  [UPDATE_PROFILE]: (state, { full_name }) => {
    state.user.full_name = full_name
  },
}

export const actions = {
  /**
   *
   * @param commit
   * @param payload
   * @return {Promise<{success: boolean}>}
   */
  async getUser({ commit }) {
    let result = { success: true }
    let response = await api.getUser()

    if (response && response.errorMessage) {
      result = { success: false, message: response.errorMessage }
      response.user = {}
    }

    commit(GET_USER, response)
    return result
  },

  /**
   * Fetch addresses
   * @param commit
   */
  fetchAddresses({ commit }) {
    commit(FETCH_ADDRESSES, addresses)
  },

  [LOADING]({ commit }, payload) {
    commit(LOADING, payload)
  },

  // eslint-disable-next-line no-unused-vars
  async fetchService({ commit }, payload) {
    let result = { success: true }
    const res = await api.fetchService(payload)

    if (!res.service) {
      result = {
        success: false,
        message: res.errorMessage || '',
      }
      return result
    }
    commit(FETCH_SERVICE, res.service)
    return result
  },

  // eslint-disable-next-line no-unused-vars
  async fetchEstimateCost({ commit }, payload) {
    let result = { success: true }
    const res = await api.fetchEstimateCost(payload)

    if (!res.costs) {
      result = {
        success: false,
        message: res.errorMessage || '',
      }
      return result
    }
    commit(FETCH_ESTIMATE_COST, res.costs)
    return result
  },

  // eslint-disable-next-line no-unused-vars
  async fetchWareHouses({ commit }, payload) {
    let result = { success: true }
    const res = await api.fetchWareHouses(payload)

    if (!res.warehouses) {
      result = {
        success: false,
        message: res.errorMessage || '',
      }
      return result
    }
    commit(FETCH_WAREHOUSE, res.warehouses)
    return result
  },

  async [UPDATE_PROFILE]({ commit }, payload) {
    const res = await api.updateProfile(payload)

    if (!res || res.error) {
      return { error: true, message: res.errorMessage || '' }
    }

    commit(UPDATE_PROFILE, payload)
    return { error: false }
  },

  // eslint-disable-next-line no-unused-vars
  /**
   *
   * @param commit
   * @param payload
   * @return {Promise<{success: boolean}>}
   */
  async getConfigs({ commit }) {
    let result = { success: true }
    
    commit(GET_CONFIGS, {})
    return result
  },
}
