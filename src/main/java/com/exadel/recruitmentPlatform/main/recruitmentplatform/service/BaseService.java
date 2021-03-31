package com.exadel.recruitmentPlatform.main.recruitmentplatform.service;

public interface BaseService<Dto> {
    Dto save(final Dto dto);
    Dto findById(final Long id);
    void deleteById(final Long id);
}
